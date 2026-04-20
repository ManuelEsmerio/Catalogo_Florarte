"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/products";

const CART_STORAGE_KEY = "florarte-cart-v1";
const MAX_QTY_PER_ITEM = 10;

export type CartItem = {
  product: Product;
  quantity: number;
};

type AddToCartOptions = {
  openCart?: boolean;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, options?: AddToCartOptions) => void;
  removeFromCart: (productCode: string) => void;
  incrementQuantity: (productCode: string) => void;
  decrementQuantity: (productCode: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const clampQuantity = (value: number) => {
  if (value < 1) return 1;
  if (value > MAX_QTY_PER_ITEM) return MAX_QTY_PER_ITEM;
  return value;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(
            parsed
              .filter(
                (item) =>
                  item?.product?.code && typeof item.quantity === "number",
              )
              .map((item) => ({
                ...item,
                quantity: clampQuantity(item.quantity),
              })),
          );
        }
      }
    } catch {
      // Ignore malformed localStorage and start with empty cart.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const addToCart = useCallback(
    (product: Product, options?: AddToCartOptions) => {
      if (!product.isAvailable) return;

      setItems((prevItems) => {
        const existing = prevItems.find(
          (item) => item.product.code === product.code,
        );
        if (existing) {
          return prevItems.map((item) =>
            item.product.code === product.code
              ? { ...item, quantity: clampQuantity(item.quantity + 1) }
              : item,
          );
        }

        return [...prevItems, { product, quantity: 1 }];
      });
      if (options?.openCart !== false) {
        setIsCartOpen(true);
      }
    },
    [],
  );

  const removeFromCart = useCallback((productCode: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.code !== productCode),
    );
  }, []);

  const incrementQuantity = useCallback((productCode: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.code === productCode
          ? { ...item, quantity: clampQuantity(item.quantity + 1) }
          : item,
      ),
    );
  }, []);

  const decrementQuantity = useCallback((productCode: string) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.code === productCode
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [items],
  );

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isCartOpen,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      openCart,
      closeCart,
      clearCart,
    }),
    [
      items,
      isCartOpen,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      openCart,
      closeCart,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export const cartMaxQtyPerItem = MAX_QTY_PER_ITEM;

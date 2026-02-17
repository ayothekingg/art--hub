export interface CardFormFieldsProps {
  checked: boolean;
  setChecked: (v: boolean) => void;
}

export interface CartProductProps {
  image: string;
  title: string;
  subtitle: string;
  price: string | number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export interface ProductSummaryProps {
  image: string;
  title: string;
  subtitle: string;
  price: string | number;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export interface ShippingDetailsProps {
  onProceed?: () => void;
}

export interface ShippingDetailsProps {
  onProceed?: () => void;
}

export interface ShippingFormProps {
  onProceed?: (formData: any) => void;
}

export interface ShoppingCartProps {
  onProceed?: () => void;
}

export interface WalletFormFieldsProps {
  selectedNetwork: any | null;
  setSelectedNetwork: (v: any) => void;
  selectedToken: any | null;
  setSelectedToken: (v: any) => void;
  checked: boolean;
  setChecked: (v: boolean) => void;
  networkButtonRef: React.RefObject<HTMLButtonElement>;
  tokenButtonRef: React.RefObject<HTMLButtonElement>;
  networks: any[];
  tokens: any[];
}

 export interface CartProductType {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  size?: string;
  price: string | number;
  quantity: number;
}

export interface CartState {
  cart: CartProductType[];
  addToCart: (product: CartProductType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

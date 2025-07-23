export type ProductType = 'nuts' | 'bolts';
export type SizeUnit = 'inches' | 'mm';

// Nut sizes in inches
export type NutSizeInches = '1/4"' | '5/16"' | '3/8"' | '1/2"' | '5/8"' | '3/4"' | '7/8"' | '1"' | '1 1/8"' | '1 1/4"' | '1 1/2"' | '2"' | '1 3/4"';

// Nut sizes in mm
export type NutSizeMM = '8mm' | '10mm' | '12mm' | '16mm' | '18mm' | '20mm' | '22mm' | '24mm' | '27mm' | '30mm' | '33mm' | '36mm' | '39mm' | '42mm' | '45mm' | '48mm' | '52mm';

// Bolt sizes in inches
export type BoltSizeInches = '3/8"' | '1/2"' | '5/8"' | '3/4"' | '1"' | '1 1/4"' | '1 1/2"';

// Bolt sizes in mm
export type BoltSizeMM = '10MM' | '12MM' | '16MM' | '20MM' | '24MM' | '30MM';

export type Plating = 'Natural Black' | 'Auto Black' | 'Golden' | 'Silver';
export type ThreadType = 'Full Thread' | 'Half Thread';

export interface Product {
  id: string;
  type: ProductType;
  nutSizeInches?: NutSizeInches;
  nutSizeMM?: NutSizeMM;
  boltSizeInches?: BoltSizeInches;
  boltSizeMM?: BoltSizeMM;
  plating: Plating;
  threadType?: ThreadType;
  material: 'Iron';
}

export interface OrderItem {
  id: string;
  nutSizeInches?: NutSizeInches;
  nutSizeMM?: NutSizeMM;
  boltSizeInches?: BoltSizeInches;
  boltSizeMM?: BoltSizeMM;
  plating: Plating;
  threadType?: ThreadType;
  quantity: number;
}
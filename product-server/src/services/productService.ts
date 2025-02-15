type Product = {
  id: number;
  name: string;
};

export const getProducts = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Sony WH-1000XM5",
    },
    {
      id: 2,
      name: "Macbook Air",
    },
  ];
};

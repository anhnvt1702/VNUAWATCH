export const orderDetail = {
  order_Detail_Id: 0,
  order_Id: 0,
  order: null,
  productId: 0,
  product: null,
  quantity: 0,
  price: 0,
  productName: "",

};

export const ordersTracking = {
  order_Id: 0,
  update_Status_Date: null,
  update_By: "",
  step: "",
  step_Text: "",
  deleted: 0,
};

export const orderInfo = {
  order_Id: 0,
  customer_Id: 0,
  customer: null, 
  order_Date: null, 
  customer_Name: "",
  address: "",
  city: "",
  district: "",
  province: "",
  settle_Type: "",
  phone: "",
  total_Order_Value: 0,
  order_Status: "",
  order_Status_Text: "",
  payment: null, 
  orderDetails: [], 
  orderTrackings: [], 
  test: "",
  track_Id: "",
};

export const productInfo = {
  productId: 0,
  title: "",
  price: 0,
  stockQuantity: 0,

  brand: {
    brandId: 0,
    name: "",
    origin: "",
  },

  category: {
    categoryId: 0,
    categoryName: "",
    description: "",
  },

  specification: {
    series: "",
    movementType: "",
    displayType: "",
    waterResistance: "",
    caseSizeMm: 0,
    caseThicknessMm: 0,
    caseShape: "",
    caseColor: "",
    caseMaterial: "",
    dialColor: "",
    dialStyle: "",
    glassMaterial: "",
    strapMaterial: "",
    style: "",
    design: "",
    utilities: "",
  },

  images: [],
};

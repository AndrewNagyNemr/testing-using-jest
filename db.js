module.exports.getCustomerSync = (id) => {
  console.log("getting customer from db");
  return { id, points: 11 };
};

module.exports.getCustomer = async (id) => {
  return new Promise((resolve, reject) => {
    console.log("Reading customer from db");
    resolve({ id, points: 11 });
  });
};

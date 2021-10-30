module.exports = {
  query: "product(slug: String!): Product",
  resolver: {
    Query: {
      product: {
        description: "Return post with given slug",
        resolver: "application::product.product.findOne",
      },
    },
  },
};

module.exports = {
  query: "productBySlug(slug: String!): Product",
  resolver: {
    Query: {
      productBySlug: {
        description: "Return post with given slug",
        resolver: "application::product.product.findOne",
      },
    },
  },
};

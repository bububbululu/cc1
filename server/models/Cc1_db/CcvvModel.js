import CcvvModelGenerated from "./generated/CcvvModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CcvvModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CcvvModelGenerated,
  ...customModel
};

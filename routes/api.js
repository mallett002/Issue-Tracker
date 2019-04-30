module.exports = (app) => {
  app.route('/api/issues/:project')
      .get((req, res) => {
          const project = req.params.project; // access the url param "project"
      })

      .post(function (req, res){
          const project = req.params.project;

      })

      .put(function (req, res){
          const project = req.params.project;

      })

      .delete(function (req, res){
          const project = req.params.project;

      });
};

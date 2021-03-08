const routes = (app) => {
    app.route('/contact')
        .get((req, response) => {
        response.send(`Get request was successsful`);
    })
        .post((req, response ) => {
            response.send(`Post request was successsful`);
    })
        .put((req, response ) => {

        })



    app.route('/contact/:contactID')
        .put((req, response)=>{
            response.send(`Put request was successsful`);
        })
        .delete((req, response ) => {
            response.send(`Delete request was successsful`);
        })
}

export default routes;
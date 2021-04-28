class Form {
    constructor(){

    }

    display(){
        var title=createElement('h2');
        title.html("Aarush Form");
        title.position(130,0);

        var input=createInput("E-Mail Id");
        var button=createButton("Submit");
        input.position(130,160);
        button.position(200,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            var greeting=createElement('h3')
            greeting.position(200,200);
            greeting.html("Your Id "+name);


        })
    }

}
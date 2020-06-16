const URL ="127.0.0.1:8080";
const cantTarjetas = 12;
context("Memotest", () => {

before(() => {
        cy.visit(URL);
});
it ("testea si hay un tablero con 12 cuadros", () =>{
    cy.get("#tablero").find(".tarjeta").should("have.length",cantTarjetas);
});

it("se asegura que las tarjetas sean aleatorias", () =>{
    
    let tarjetas = [];
    let tarjetasNuevas = [];
    cy.get(".tarjeta").then( (tarjeta) =>{
       
        
        
        tarjeta.each(function(i,tarj){ 
            console.log(tarj);
            tarjetas.push(tarj.classname); 
            });       
        });

        cy.visit(URL);

        cy.get(".tarjeta").then( (tarjeta) =>{
            
            
            tarjeta.each(function(i,tarj){
                tarjetasNuevas.push(tarj.classname); 
            });
        });    
    cy.wrap(tarjetas).should("not.equal",tarjetasNuevas);    
});
});
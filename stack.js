    function stack() {       

        this.items = [];  
        
        //Qual o tamanho da pilha
        this.size = function() {     
        return this.items.length;   
        }
    
        //Verificar se a pilha ta vazia ou não
    this.isEmpty = function() {     
        return this.items.length === 0;   
    }
    
        //Colocar elementos na pilha
    this.push = function(element) {
        this.items.push(element);   
    }
    
        //Remove elementos da pilha
    this.pop = function() {   
        if (this.isEmpty())
            throw "pilha vazia"  
        return this.items.pop();   
    }
    }
    
    //Exportar elemento stack
    module.exports = stack;
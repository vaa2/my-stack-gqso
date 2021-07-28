    const stack = require('./stack');

        beforeEach(() => {
            s = new stack();
        });

        test('Testar pilha vazia na criação', () => {
            expect(s.isEmpty()).toEqual(true);
        });

        test('Testar pilha não vazia', () => {
            s.push(5);
            expect(s.isEmpty()).toEqual(false);
        });

        test('Testar pilha vazia após inserir e remover um elemento', () => {
            s.push(5);
            s.pop();
            expect(s.isEmpty()).toEqual(true);
        });

        test('Verificar tamanho correto da pilha', () => {
            s.push(25);
            s.push(30);
            s.push(50);
            expect(s.size()).toBe(3);
        });

        test('Testar remover elemento de pilha vazia', () => {
            s.push(5);
            s.pop();
            expect(() => {s.pop()}).toThrow();
        });

        test('Testar tamanho, inserindo e removendo elementos', () => {
            s.push(10);
            s.push(15);
            s.push(20);
            s.pop();
            expect(s.size()).toBe(2);
        });

        test('Testar inserir e remover vários elementos', () => {
            s.push(3);
            s.push(6);
            s.push(9);
            s.pop();
            s.push(4);
            s.push(8);
            s.push(12);
            s.pop();
            s.push(7);
            s.push(14);
            s.push(21);
            s.pop();
            s.push(8);
            s.push(16);
            s.push(24);
            s.pop();

            expect(s.isEmpty()).toEqual(false);
        });

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
	const deliveryPerson = order.order.delivery.deliveryPerson;
	const clientName = order.name;
	const phone = order.phoneNumber;
	const street = order.address.street;
	const number = order.address.number;
	const apartment = order.address.apartment;

	const pedidoDeEntrega = `Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP.: ${apartment}`;

	return pedidoDeEntrega;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const drink = order.order.drinks.coke.type;

  let newName = order.name;
  newName = 'Luiz Silva';
  let newPrice = order.payment.total;
  newPrice = 50.00

  const modificarPedido = `Olá ${newName}, o total do seu pedido de marguerita, pepperoni e ${drink} é R$${newPrice},00`;

  return modificarPedido;
}

console.log(orderModifier(order));
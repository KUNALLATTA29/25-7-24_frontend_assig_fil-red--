const data = [
          {
            id: 1,
            name: "John Doe",
            age: 30,
            address: {
              street: "123 Main St",
              city: "Anytown",
              country: "USA",
            },
            orders: [
              { orderId: "A123", amount: 50.75, status: "completed" },
              { orderId: "B456", amount: 30.25, status: "pending" },
            ],
          },
          {
            id: 2,
            name: "Jane Smith",
            age: 25,
            address: {
              street: "456 Oak St",
              city: "Othercity",
              country: "USA",
            },
            orders: [
              { orderId: "C789", amount: 100.5, status: "completed" },
              { orderId: "D012", amount: 75.2, status: "completed" },
            ],
          },
          {
            id: 3,
            name: "kunal",
            age: 18,
            address: {
              street: "jugu",
              city: "bikaner",
              country: "india",
            },
            orders: [
              { orderId: "C734", amount: 143.5, status: "completed" },
              { orderId: "D452", amount: 15.2, status: "completed" },
            ],
          },
          {
            id: 4,
            name: "babu lal",
            age: 79,
            address: {
              street: "road no 3",
              city: "kota",
              country: "india",
            },
            orders: [
              { orderId: "C719", amount: 110.5, status: "completed" },
              { orderId: "D672", amount: 65.2, status: "completed" },
            ],
          },
          {
            id: 5,
            name: "damru lal",
            age: 69,
            address: {
              street: "road 1",
              city: "jaipur",
              country: "india",
            },
            orders: [
              { orderId: "C999", amount: 190.5, status: "completed" },
              { orderId: "D112", amount: 95.2, status: "completed" },
            ],
          },
          
        ]
        
        let a = data.flatMap((item)=> item.orders.filter(order => order.amount > 50))
        console.log(a);
        
        

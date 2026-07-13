reducers: {
  addItem: (state, action) => {
    const item = action.payload;

    const existingItem = state.items.find(
      (i) => i.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.items.push({
        ...item,
        quantity: 1,
      });
    }
  },

  removeItem: (state, action) => {
    const itemName = action.payload;

    state.items = state.items.filter(
      (item) => item.name !== itemName
    );
  },

  updateQuantity: (state, action) => {
    const { name, quantity } = action.payload;

    const item = state.items.find(
      (item) => item.name === name
    );

    if (item) {
      if (quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.name !== name
        );
      } else {
        item.quantity = quantity;
      }
    }
  },
},

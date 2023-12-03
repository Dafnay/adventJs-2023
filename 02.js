function manufacture(gifts, materials) {

    const result = []
    for (const gift of gifts) {
      let canManufacture = true;
     
      for (const letter of gift) {
        if (!materials.includes(letter)) {
          canManufacture = false;
          break;
        }
      }
      if (canManufacture) {
        result.push(gift);
      }
    }
    return result
  }
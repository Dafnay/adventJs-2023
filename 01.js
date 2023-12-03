function findFirstRepeated(gifts) {
    const not_found = -1;
    const map = {};
  
    for (let i = 0; i < gifts.length; i++) {
      const currentGift = gifts[i];
      if (map[currentGift] !== undefined) {
        return currentGift;
      } else {
        map[currentGift] = i;
      }
    }
  
    return not_found;
  }


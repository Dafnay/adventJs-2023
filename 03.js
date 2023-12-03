function findNaughtyStep(original, modified) {
    const lenOriginal = original.length;
    const lenModified = modified.length;
    const minLength = Math.min(lenOriginal, lenModified);
  
    for (let i = 0; i < minLength; i++) {
      if (original[i] !== modified[i]) {
        return lenOriginal > lenModified ? original[i] : modified[i];
      }
    }
    return lenOriginal > lenModified ? original[minLength] : modified[minLength] || '';
  }
  
  
  
function insertionSort(tab) {
    for (let i = 1; i < tab.length; i++) { //le i commence à 1 et non pas 0 en raison de l'énoncé de l'exercice

        let element = tab[i];

        let j = i - 1; //voilà ce que l'énoncé de l'exercice à demander, et pourquoi i doit commencer à 1, sinon j commencerait à -1

        
      while (j >= 0 && tab[j] > element) {
        tab[j + 1] = tab[j];
        j = j - 1;
      }

      tab[j + 1] = element;
    }
  
    return tab;
  }
  
  const tab = [12, 11, 13, 5, 6];
  console.log("Original tabay:", tab);
  const sortedTab = insertionSort(tab);
  console.log("Sorted tabay:", sortedTab);
  
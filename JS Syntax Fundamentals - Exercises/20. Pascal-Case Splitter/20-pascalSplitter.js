function pascalSplitter(text) {
    let textArr = text.split(/(?=[A-Z])/).join(', ');

    console.log(textArr)
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSplitter('HoldTheDoor');
pascalSplitter('ThisIsSoAnnoyingToDo');

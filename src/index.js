module.exports = function toReadable(number) {
    let strNumber = String(number);
    let Words1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let Words2 = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let Words3 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (strNumber.length < 3) {
        let spaceCount = 3 - strNumber.length;
        for (let i = 0; i < spaceCount; i++) 
            strNumber = ' ' + strNumber;
    }

    let result = '';

    let previos = false;

    for (let position = 0 ; position < strNumber.length; position++) {
        console.log(position, strNumber[position]);
        switch (position){
            case 0:
                if (strNumber[position] != ' '&&strNumber[position] != 0){
                    result = result + Words1[strNumber[position]] + ' hundred';
                }
                break;
            case 1:
                if (strNumber[position] != ' '&&strNumber[position] != 0&&strNumber[position] != 1){
                    result = result + ' ' + Words2[strNumber[position]-1];
                } 
                else if (strNumber[position] == 1){
                    previos = true;
                }
                break
            case 2:
                console.log(previos);
                if (previos) {
                    result = result + ' ' + Words3[strNumber[position]];
                } else if (!result&&strNumber[position] == 0){
                    result = 'zero';
                } else {
                    result = result + ' ' + Words1[strNumber[position]];
                }
                break
        }
    }
    return result.trim();

}


var user = prompt('Write any Words to Check Vowels in it!');
var userArr = user.split(' ')
var userArr2 = userArr.join('')
var vowels = 0;
for (let i=0 ; i<=userArr2.length ; i++)
{
    if ( userArr2[i] == 'a' || userArr2[i] == 'e' || userArr2[i] ==  'i' || userArr2[i] == 'o' || userArr2[i] ==  'u')
    {
        console.log(userArr2[i]);
        vowels = vowels + 1;
    }
}  

console.log('Words:' , user);
console.log('Total no of Vowels are:' , vowels);
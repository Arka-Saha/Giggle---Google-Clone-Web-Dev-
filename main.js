function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
let search_btn = document.getElementById('search');
let search_box = document.querySelector('#query_input');

async function search()
{
    var query = document.querySelector('#query_input').value;
    var query_checker = document.querySelector('#query_input').value;

    query = query.replace(/ /g, '+');
    search_box.value = "";
    if (query_checker.replace(/ /g, '') != "")
    {
        var url = "https://www.google.com/search?q="+query+"&hl=en&sxsrf=AOaemvKYsQzPi-vt7gZthtWAbXgcCaFDBQ%3A1637660572850&source=hp&ei=nLecYYKCJ6nL1sQPvMuz2AU&iflsig=ALs-wAMAAAAAYZzFrPXIkTG6-eMlDY7PD_dy2uQXPk2v&ved=0ahUKEwiCwMeFma70AhWppZUCHbzlDFsQ4dUDCAs&uact=5&oq=+++&gs_lcp=Cgdnd3Mtd2l6EAEYATIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1CrxgxYktIMYOfwI2gHcAB4AIAB5gOIAeYDkgEDNC0xmAEAoAEBsAEK&sclient=gws-wiz"
        window.open(url);
    }
    else
    {
        search_box.value = "No Text Entered!"
        search_box.style.border = "2px solid red";
        await sleep(1500);
        search_box.value = ""
        search_box.style.border ="";
    }
}

let hindi = document.querySelector('#hindi_ol');
let bengali = document.querySelector('#beng_ol');
let eng = document.querySelector('#eng_ol');
let pretext = document.querySelector('#pretext_changel');

let heading = document.querySelector('#heading');

hindi.addEventListener('click', () => {
    heading.innerText = 'गिग्ल';
    pretext.innerText = 'गिग्ल भाषाओं का इस्तेमाल';
});
 
bengali.addEventListener('click', () => {
    heading.innerText = 'গিগল';
    pretext.innerText = 'গিগল এই ভাষায় উপলব্ধ';
});

eng.addEventListener('click', () => {
    heading.innerText = 'Giggle';
    pretext.innerText = 'Giggle offered in';
});
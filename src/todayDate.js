export function getTodayDate() {
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // let yyyy = today.getFullYear();

    // today = dd + '/' + mm + '/' + yyyy;

    // return today;

    //תאריך עברי במילים
    const date = new Date(Date.now());
    const dataInWords = new Intl.DateTimeFormat('he', { dateStyle: 'full' }).format(date);
    return dataInWords;
}


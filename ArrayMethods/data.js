let employees = [{ "id": 1, "name": "Iain", "email": "ikanter0@nydailynews.com", "gender": "Agender" },
{ "id": 2, "name": "Hetty", "email": "hvautre1@bbb.org", "gender": "Female" },
{ "id": 3, "name": "Esteban", "email": "emilier2@shutterfly.com", "gender": "Polygender" },
{ "id": 4, "name": "Marilyn", "email": "mmcettigen3@usa.gov", "gender": "Female" },
{ "id": 5, "name": "Lizette", "email": "ldearlepalser4@cmu.edu", "gender": "Female" },
{ "id": 6, "name": "Chase", "email": "cellerington5@soundcloud.com", "gender": "Male" },
{ "id": 7, "name": "Larine", "email": "lcatton6@adobe.com", "gender": "Female" },
{ "id": 8, "name": "Lexy", "email": "leminson7@wired.com", "gender": "Female" },
{ "id": 9, "name": "Seka", "email": "stunstall8@soup.io", "gender": "Female" },
{ "id": 10, "name": "Ervin", "email": "eburgher9@mail.ru", "gender": "Non-binary" },
{ "id": 11, "name": "Adrienne", "email": "asimonsena@mail.ru", "gender": "Female" },
{ "id": 12, "name": "Trenton", "email": "tcornfieldb@trellian.com", "gender": "Male" },
{ "id": 13, "name": "Cello", "email": "cmulqueenc@ihg.com", "gender": "Male" },
{ "id": 14, "name": "Meyer", "email": "msconesd@shareasale.com", "gender": "Male" },
{ "id": 15, "name": "Malorie", "email": "mlomanseye@ucoz.ru", "gender": "Female" },
{ "id": 16, "name": "Alick", "email": "asouthbyf@xrea.com", "gender": "Male" },
{ "id": 17, "name": "Merrie", "email": "mgammillg@businessweek.com", "gender": "Female" },
{ "id": 18, "name": "Ragnar", "email": "rtroyesh@umich.edu", "gender": "Male" },
{ "id": 19, "name": "Tansy", "email": "tzammitti@epa.gov", "gender": "Female" },
{ "id": 20, "name": "Corrinne", "email": "cheggisonj@redcross.org", "gender": "Female" }]

let display_Data = () => {
    let rows = "";
    employees.forEach((employee) => {
        rows = rows + `<tr>
                        <td>  ${employee.id}</td>
                        <td>  ${employee.name}</td>
                        <td>  ${employee.email}</td>
                        <td>  ${employee.gender}</td>
                        </tr>`
    })
    document.getElementById('tbody_Data').innerHTML = rows
}
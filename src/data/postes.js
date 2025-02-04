const postes = [
    {
        id: 1,
        title: "Consultant Software Engineer",
        description: "Full Stack Developer, to conception at deployment",
        periode: "September 2024 - nowadays",
        role: [
            {
                id: 1,
                libelle: "Conception And Database Modelisation"
            },
            {
                id: 2,
                libelle: "Develop Landing Page and Back Office"
            },
            {
                id: 3,
                libelle: "Develop API Services for Mobile Application"
            },
            {
                id: 4,
                libelle: "Integrate tiers services such as: Billing and Messages"
            }
        ],
        skills: [
            {id: 1, tip: "Laravel 11"},
            {id: 2, tip: "Alpine Js"},
            {id: 3, tip: "Tailwind Css"},
            {id: 4, tip: "MySQL"},
            {id: 5, tip: "Git"},
        ],
        lieu: "Remote",
        logo_company: "https://kanora.fr/images/logo/logo.png",
        link_company: "https://www.kanora.fr",
        company_name: "KaNora"

    },
    {
        id: 2,
        title: "Software Engineer",
        description: "Description of My Post and what i do there",
        periode: "April 2022 - September 2024",
        role: [
            {
                id: 1,
                libelle: "Develop aggregated platform for all Services of the company"
            },
            {
                id: 2,
                libelle: "Database Conception & Construction"
            },
            {
                id: 3,
                libelle: "Application Update's & New feature's integration "
            },
            {
                id: 4,
                libelle: "Data Treatment and Information Extraction"
            },
            {
                id: 5,
                libelle: "Training on the use of our services"
            }
        ],
        skills: [
            {id: 1, tip: "Laravel"},
            {id: 2, tip: "JQuery (JS)"},
            {id: 3, tip: "Python"},
            {id: 4, tip: "MySQL"},
            {id: 2, tip: "Excel"},
            {id: 5, tip: "Git"},
        ],
        lieu: "Dakar,Senegal",
        logo_company: "data:image/png;base64,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",
        link_company: "https://www.mlouma.com",
        company_name: "Mlouma"

    },
    {
        id: 3,
        title: "Back End Engineer",
        description: "Description",
        periode: "July 2021 - March 2022",
        role: [
            {id: 1, libelle: "Maintenance, Monitoring, and Evolution of platforms"},
            {id: 2, libelle: "Integration of Services, Update of the Database"},
            {id: 3, libelle: "REST API Implementation"},
            // {id: 1, libelle: ""},
        ],
        skills: [
            {id: 1, tip: "JEE (JAVA)"},
            {id: 1, tip: "ZK"},
            {id: 1, tip: "JS"},
            {id: 1, tip: "MySQL"},
            {id: 1, tip: "Git - GitLab"},
        ],
        lieu: "Dakar,Senegal",
        logo_company: "data:image/png;base64,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",
        link_company: "https://intouchgroup.net/",
        company_name: "INTOUCH"
    },
    {
        id: 4,
        title: "Consultant Engineer",
        description: "Description",
        periode: "2020 - 2021",
        role: [
            {
                id: 1, libelle: "Studies and analyzes on the request process at service level\n" +
                    "Administrative"
            },
            {id: 2, libelle: "Data Model Conception and Modelization"},
            {id: 3, libelle: "Back Office Application Making, Webservices Integration"},
        ],
        skills: [
            {id: 1, tip: "Laravel"},
            {id: 4, tip: "MySQL"},
            {id: 2, tip: "UML"},
            {id: 5, tip: "Git - GitLab"},
            {id: 3, tip: "Icescrum"},
        ],
        lieu: "Dakar,Senegal",
        logo_company: "data:image/png;base64,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",
        link_company: "",
        company_name: "Senegal Numerique (Ex ADIE)"
    },
    {
        id: 5,
        title: "Research Engineer Internship",
        description: "Description",
        periode: "2020",
        role: [
            {id: 1, libelle: "ETL & Data Scrapping"},
            {id: 2, libelle: "Data lake Creation"},
            {id: 3, libelle: "Question/Answer System Building (IA)"},
        ],
        skills: [
            {id: 1, tip: "Python"},
            {id: 2, tip: "ElasticSearch"},
            {id: 3, tip: "Postgres"},
            {id: 4, tip: "Git"}
        ],
        lieu: "Remote",
        logo_company: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxQWFhUXGRcbGBgYGRogHxohHhcYGxoYHxkdKCgjHSAnHhcaLTEkJykrLy8wHSA1ODMtNystOjcBCgoKDg0OGxAQGy0lICUtLS0tLy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEIQAAECBAMFBQUFBAoDAAAAAAEAAgMEBREGEiEHMUFRcRMiYYGRMkJSobFicqOzwRSi0eIVFyQ0N4KT0uHwFjZz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFB//EADERAAICAQMCBAMHBQEAAAAAAAABAgMRBBIhMUEFE1FhInGBUpGhscHR8RQjMuHwFf/aAAwDAQACEQMRAD8AhyIi8k+hhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBF6QocSPEDYYLiTYAC5PQKTy2z7EcxBzGCG8g5zQfS+nmrRi5dEZW311f5yS+ZFeKwpBCwXXn1HsHQS19i4ZiMpAtezhod65dVp8xSZ50GcAD2WvY33gHf5qHFrloQvrm9sZJvqafBFIaXguu1WCHy8Ehp3OeQ2/QHUryrOFK1RYeadhEM+JpDh5kbvNTsljOGVWqpctims/M4azqsdF06PQanWn2p0Jz7bzoAOrjoqpNvg1nOMFuk8L7jmopRN4AxHKwcxg5gN+VzSfS9z5KNGC8RsrwQ69rHSx5FS4yXVFK767eYST/Q80UomcA4igRGt7HMXXtlcCBYcSdB5pN4AxHKwMxg5gN4a5pPpfXyVvLn6Mz/AK3T8fGufci6yj2GG4h4II0IW9SaNP1iNlp0NzyN9tw6uOg3cVRL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",
        link_company: "https://www.agenceecofin.com/",
        company_name: "ECOFIN - UGB"
    },
    {
        id: 6,
        title: "Software Engineer Internship",
        description: "Description",
        periode: "2019",
        role: [
            {id: 1, libelle: "Sensor Data Visualisation on Web App"},
            {id: 1, libelle: "Sensor Geolocation"},
            {id: 1, libelle: "Notion of Virtual Sensor"},
        ],
        skills: [
            {id: 1, tip: "Angular"},
            {id: 2, tip: "Spring"},
            {id: 3, tip: "MySQL"},
            {id: 4, tip: "UML"},
            {id: 5, tip: "Git-Github"}
        ],
        lieu: "Dakar,Senegal",
        logo_company: "data:image/png;base64,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",
        link_company: "https://www.ummisco.fr/",
        company_name: "UMMISCO - IRD"
    },
];

export default postes;

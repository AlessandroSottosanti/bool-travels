const viaggi = [
    {
        destinazione: "Roma, Italia",
        dataPartenza: "2023-11-01",
        dataRitorno: "2023-11-07",
        guide: ["Mario Rossi", "Laura Bianchi"],
        viaggiatori: [
            { nome: "Giuseppe", cognome: "Verdi", mail: "giuseppe.verdi@example.com", telefono: "1234567890" },
            { nome: "Maria", cognome: "Neri", mail: "maria.neri@example.com", telefono: "0987654321" },
            { nome: "Luca", cognome: "Rossi", mail: "luca.rossi@example.com", telefono: "1122334455" },
            { nome: "Sara", cognome: "Bianchi", mail: "sara.bianchi@example.com", telefono: "2233445566" },
            { nome: "Paolo", cognome: "Gialli", mail: "paolo.gialli@example.com", telefono: "3344556677" },
            { nome: "Laura", cognome: "Verdi", mail: "laura.verdi@example.com", telefono: "4455667788" },
            { nome: "Marco", cognome: "Neri", mail: "marco.neri@example.com", telefono: "5566778899" }
        ]
    },
    {
        destinazione: "Parigi, Francia",
        dataPartenza: "2023-11-10",
        dataRitorno: "2023-11-15",
        guide: ["Jean Dupont", "Sophie Martin"],
        viaggiatori: [
            { nome: "Luigi", cognome: "Bianchi", mail: "luigi.bianchi@example.com", telefono: "6677889900" },
            { nome: "Anna", cognome: "Rossi", mail: "anna.rossi@example.com", telefono: "7788990011" },
            { nome: "Giovanni", cognome: "Verdi", mail: "giovanni.verdi@example.com", telefono: "8899001122" },
            { nome: "Elena", cognome: "Neri", mail: "elena.neri@example.com", telefono: "9900112233" },
            { nome: "Francesco", cognome: "Bianchi", mail: "francesco.bianchi@example.com", telefono: "0011223344" },
            { nome: "Chiara", cognome: "Rossi", mail: "chiara.rossi@example.com", telefono: "1122334455" },
            { nome: "Roberto", cognome: "Verdi", mail: "roberto.verdi@example.com", telefono: "2233445566" }
        ]
    },
    {
        destinazione: "New York, USA",
        dataPartenza: "2023-12-05",
        dataRitorno: "2023-12-12",
        guide: ["John Smith", "Emily Johnson"],
        viaggiatori: [
            { nome: "Paolo", cognome: "Gialli", mail: "paolo.gialli@example.com", telefono: "3344556677" },
            { nome: "Sara", cognome: "Verdi", mail: "sara.verdi@example.com", telefono: "4455667788" },
            { nome: "Marco", cognome: "Neri", mail: "marco.neri@example.com", telefono: "5566778899" },
            { nome: "Laura", cognome: "Bianchi", mail: "laura.bianchi@example.com", telefono: "6677889900" },
            { nome: "Giuseppe", cognome: "Rossi", mail: "giuseppe.rossi@example.com", telefono: "7788990011" },
            { nome: "Maria", cognome: "Verdi", mail: "maria.verdi@example.com", telefono: "8899001122" },
            { nome: "Luca", cognome: "Bianchi", mail: "luca.bianchi@example.com", telefono: "9900112233" }
        ]
    },
    {
        destinazione: "Tokyo, Giappone",
        dataPartenza: "2024-01-15",
        dataRitorno: "2024-01-22",
        guide: ["Yuki Tanaka", "Hiroshi Sato"],
        viaggiatori: [
            { nome: "Marco", cognome: "Neri", mail: "marco.neri@example.com", telefono: "0011223344" },
            { nome: "Laura", cognome: "Bianchi", mail: "laura.bianchi@example.com", telefono: "1122334455" },
            { nome: "Giovanni", cognome: "Rossi", mail: "giovanni.rossi@example.com", telefono: "2233445566" },
            { nome: "Elena", cognome: "Verdi", mail: "elena.verdi@example.com", telefono: "3344556677" },
            { nome: "Francesco", cognome: "Bianchi", mail: "francesco.bianchi@example.com", telefono: "4455667788" },
            { nome: "Chiara", cognome: "Neri", mail: "chiara.neri@example.com", telefono: "5566778899" },
            { nome: "Roberto", cognome: "Rossi", mail: "roberto.rossi@example.com", telefono: "6677889900" }
        ]
    },
    {
        destinazione: "Londra, Regno Unito",
        dataPartenza: "2024-02-01",
        dataRitorno: "2024-02-08",
        guide: ["James Brown", "Emma Wilson"],
        viaggiatori: [
            { nome: "Giovanni", cognome: "Rossi", mail: "giovanni.rossi@example.com", telefono: "7788990011" },
            { nome: "Elena", cognome: "Verdi", mail: "elena.verdi@example.com", telefono: "8899001122" },
            { nome: "Francesco", cognome: "Bianchi", mail: "francesco.bianchi@example.com", telefono: "9900112233" },
            { nome: "Chiara", cognome: "Neri", mail: "chiara.neri@example.com", telefono: "0011223344" },
            { nome: "Roberto", cognome: "Rossi", mail: "roberto.rossi@example.com", telefono: "1122334455" },
            { nome: "Silvia", cognome: "Verdi", mail: "silvia.verdi@example.com", telefono: "2233445566" },
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "3344556677" }
        ]
    },
    {
        destinazione: "Barcellona, Spagna",
        dataPartenza: "2024-03-10",
        dataRitorno: "2024-03-17",
        guide: ["Carlos Garcia", "Ana Lopez"],
        viaggiatori: [
            { nome: "Francesco", cognome: "Bianchi", mail: "francesco.bianchi@example.com", telefono: "4455667788" },
            { nome: "Chiara", cognome: "Neri", mail: "chiara.neri@example.com", telefono: "5566778899" },
            { nome: "Roberto", cognome: "Rossi", mail: "roberto.rossi@example.com", telefono: "6677889900" },
            { nome: "Silvia", cognome: "Verdi", mail: "silvia.verdi@example.com", telefono: "7788990011" },
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "8899001122" },
            { nome: "Elena", cognome: "Neri", mail: "elena.neri@example.com", telefono: "9900112233" },
            { nome: "Giuseppe", cognome: "Rossi", mail: "giuseppe.rossi@example.com", telefono: "0011223344" }
        ]
    },
    {
        destinazione: "Berlino, Germania",
        dataPartenza: "2024-04-05",
        dataRitorno: "2024-04-12",
        guide: ["Michael Schmidt", "Julia Weber"],
        viaggiatori: [
            { nome: "Luca", cognome: "Rossi", mail: "luca.rossi@example.com", telefono: "1122334455" },
            { nome: "Martina", cognome: "Verdi", mail: "martina.verdi@example.com", telefono: "2233445566" },
            { nome: "Andrea", cognome: "Bianchi", mail: "andrea.bianchi@example.com", telefono: "3344556677" },
            { nome: "Silvia", cognome: "Neri", mail: "silvia.neri@example.com", telefono: "4455667788" },
            { nome: "Davide", cognome: "Rossi", mail: "davide.rossi@example.com", telefono: "5566778899" },
            { nome: "Elena", cognome: "Verdi", mail: "elena.verdi@example.com", telefono: "6677889900" },
            { nome: "Giuseppe", cognome: "Bianchi", mail: "giuseppe.bianchi@example.com", telefono: "7788990011" }
        ]
    },
    {
        destinazione: "Sydney, Australia",
        dataPartenza: "2024-05-01",
        dataRitorno: "2024-05-10",
        guide: ["David Jones", "Sarah Brown"],
        viaggiatori: [
            { nome: "Andrea", cognome: "Bianchi", mail: "andrea.bianchi@example.com", telefono: "8899001122" },
            { nome: "Silvia", cognome: "Neri", mail: "silvia.neri@example.com", telefono: "9900112233" },
            { nome: "Davide", cognome: "Rossi", mail: "davide.rossi@example.com", telefono: "0011223344" },
            { nome: "Elena", cognome: "Verdi", mail: "elena.verdi@example.com", telefono: "1122334455" },
            { nome: "Giuseppe", cognome: "Bianchi", mail: "giuseppe.bianchi@example.com", telefono: "2233445566" },
            { nome: "Marco", cognome: "Neri", mail: "marco.neri@example.com", telefono: "3344556677" },
            { nome: "Laura", cognome: "Rossi", mail: "laura.rossi@example.com", telefono: "4455667788" }
        ]
    },
    {
        destinazione: "Rio de Janeiro, Brasile",
        dataPartenza: "2024-06-15",
        dataRitorno: "2024-06-22",
        guide: ["Carlos Silva", "Ana Costa"],
        viaggiatori: [
            { nome: "Roberto", cognome: "Rossi", mail: "roberto.rossi@example.com", telefono: "5566778899" },
            { nome: "Valentina", cognome: "Verdi", mail: "valentina.verdi@example.com", telefono: "6677889900" },
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "7788990011" },
            { nome: "Elena", cognome: "Neri", mail: "elena.neri@example.com", telefono: "8899001122" },
            { nome: "Giuseppe", cognome: "Rossi", mail: "giuseppe.rossi@example.com", telefono: "9900112233" },
            { nome: "Marco", cognome: "Verdi", mail: "marco.verdi@example.com", telefono: "0011223344" },
            { nome: "Laura", cognome: "Bianchi", mail: "laura.bianchi@example.com", telefono: "1122334455" }
        ]
    },
    {
        destinazione: "Città del Capo, Sudafrica",
        dataPartenza: "2024-07-01",
        dataRitorno: "2024-07-10",
        guide: ["John Doe", "Jane Smith"],
        viaggiatori: [
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "2233445566" },
            { nome: "Elena", cognome: "Neri", mail: "elena.neri@example.com", telefono: "3344556677" },
            { nome: "Giuseppe", cognome: "Rossi", mail: "giuseppe.rossi@example.com", telefono: "4455667788" },
            { nome: "Marco", cognome: "Verdi", mail: "marco.verdi@example.com", telefono: "5566778899" },
            { nome: "Laura", cognome: "Bianchi", mail: "laura.bianchi@example.com", telefono: "6677889900" },
            { nome: "Roberto", cognome: "Neri", mail: "roberto.neri@example.com", telefono: "7788990011" },
            { nome: "Valentina", cognome: "Rossi", mail: "valentina.rossi@example.com", telefono: "8899001122" }
        ]
    },
    {
        destinazione: "Reykjavik, Islanda",
        dataPartenza: "2024-08-01",
        dataRitorno: "2024-08-10",
        guide: ["Erik Johansson", "Anna Sigurdardottir"],
        viaggiatori: [
            { nome: "Federico", cognome: "Rossi", mail: "federico.rossi@example.com", telefono: "3344556677" },
            { nome: "Giulia", cognome: "Verdi", mail: "giulia.verdi@example.com", telefono: "4455667788" },
            { nome: "Matteo", cognome: "Bianchi", mail: "matteo.bianchi@example.com", telefono: "5566778899" },
            { nome: "Sofia", cognome: "Neri", mail: "sofia.neri@example.com", telefono: "6677889900" },
            { nome: "Riccardo", cognome: "Rossi", mail: "riccardo.rossi@example.com", telefono: "7788990011" },
            { nome: "Alessia", cognome: "Verdi", mail: "alessia.verdi@example.com", telefono: "8899001122" },
            { nome: "Lorenzo", cognome: "Bianchi", mail: "lorenzo.bianchi@example.com", telefono: "9900112233" }
        ]
    },
    {
        destinazione: "Bangkok, Thailandia",
        dataPartenza: "2024-09-15",
        dataRitorno: "2024-09-25",
        guide: ["Somsak Chai", "Nonglak Srisai"],
        viaggiatori: [
            { nome: "Simone", cognome: "Rossi", mail: "simone.rossi@example.com", telefono: "0011223344" },
            { nome: "Elisa", cognome: "Verdi", mail: "elisa.verdi@example.com", telefono: "1122334455" },
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "2233445566" },
            { nome: "Valeria", cognome: "Neri", mail: "valeria.neri@example.com", telefono: "3344556677" },
            { nome: "Gabriele", cognome: "Rossi", mail: "gabriele.rossi@example.com", telefono: "4455667788" },
            { nome: "Chiara", cognome: "Verdi", mail: "chiara.verdi@example.com", telefono: "5566778899" },
            { nome: "Filippo", cognome: "Bianchi", mail: "filippo.bianchi@example.com", telefono: "6677889900" }
        ]
    },
    {
        destinazione: "Dubai, Emirati Arabi Uniti",
        dataPartenza: "2024-10-01",
        dataRitorno: "2024-10-08",
        guide: ["Ahmed Al-Maktoum", "Fatima Al-Farsi"],
        viaggiatori: [
            { nome: "Alessandro", cognome: "Rossi", mail: "alessandro.rossi@example.com", telefono: "7788990011" },
            { nome: "Martina", cognome: "Verdi", mail: "martina.verdi@example.com", telefono: "8899001122" },
            { nome: "Luca", cognome: "Bianchi", mail: "luca.bianchi@example.com", telefono: "9900112233" },
            { nome: "Sara", cognome: "Neri", mail: "sara.neri@example.com", telefono: "0011223344" },
            { nome: "Marco", cognome: "Rossi", mail: "marco.rossi@example.com", telefono: "1122334455" },
            { nome: "Giulia", cognome: "Verdi", mail: "giulia.verdi@example.com", telefono: "2233445566" },
            { nome: "Andrea", cognome: "Bianchi", mail: "andrea.bianchi@example.com", telefono: "3344556677" }
        ]
    },
    {
        destinazione: "Vienna, Austria",
        dataPartenza: "2024-11-10",
        dataRitorno: "2024-11-17",
        guide: ["Franz Huber", "Sophie Wagner"],
        viaggiatori: [
            { nome: "Roberto", cognome: "Rossi", mail: "roberto.rossi@example.com", telefono: "4455667788" },
            { nome: "Elena", cognome: "Verdi", mail: "elena.verdi@example.com", telefono: "5566778899" },
            { nome: "Davide", cognome: "Bianchi", mail: "davide.bianchi@example.com", telefono: "6677889900" },
            { nome: "Chiara", cognome: "Neri", mail: "chiara.neri@example.com", telefono: "7788990011" },
            { nome: "Filippo", cognome: "Rossi", mail: "filippo.rossi@example.com", telefono: "8899001122" },
            { nome: "Alessia", cognome: "Verdi", mail: "alessia.verdi@example.com", telefono: "9900112233" },
            { nome: "Lorenzo", cognome: "Bianchi", mail: "lorenzo.bianchi@example.com", telefono: "0011223344" }
        ]
    },
    {
        destinazione: "Praga, Repubblica Ceca",
        dataPartenza: "2024-12-01",
        dataRitorno: "2024-12-08",
        guide: ["Jan Novak", "Petra Svoboda"],
        viaggiatori: [
            { nome: "Matteo", cognome: "Rossi", mail: "matteo.rossi@example.com", telefono: "1122334455" },
            { nome: "Sofia", cognome: "Verdi", mail: "sofia.verdi@example.com", telefono: "2233445566" },
            { nome: "Riccardo", cognome: "Bianchi", mail: "riccardo.bianchi@example.com", telefono: "3344556677" },
            { nome: "Alessia", cognome: "Neri", mail: "alessia.neri@example.com", telefono: "4455667788" },
            { nome: "Lorenzo", cognome: "Rossi", mail: "lorenzo.rossi@example.com", telefono: "5566778899" },
            { nome: "Giulia", cognome: "Verdi", mail: "giulia.verdi@example.com", telefono: "6677889900" },
            { nome: "Filippo", cognome: "Bianchi", mail: "filippo.bianchi@example.com", telefono: "7788990011" }
        ]
    }
];



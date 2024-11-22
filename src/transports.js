const tram = [
        "05:22", "05:52", "06:07", "06:22", "06:37", "06:42", "06:52", "06:57", 
        "07:07", "07:12", "07:22", "07:27", "07:37", "07:42", "07:52", "07:57", 
        "08:07", "08:12", "08:22", "08:27", "08:37", "08:42", "08:52", "08:57", 
        "09:07", "09:12", "09:22", "09:27", "09:37", "09:52", "10:07", "10:22", 
        "10:37", "10:52", "11:07", "11:22", "11:37", "11:52", "12:07", "12:22", 
        "12:37", "12:42", "12:52", "12:57", "13:07", "13:12", "13:22", "13:27", 
        "13:37", "13:42", "13:52", "13:57", "14:07", "14:12", "14:22", "14:27", 
        "14:37", "14:47", "15:02", "15:17", "15:32", "15:47", "16:02", "16:17", 
        "16:32", "16:47", "17:02", "17:07", "17:17", "17:22", "17:32", "17:37", 
        "17:47", "17:52", "18:02", "18:07", "18:17", "18:22", "18:32", "18:37", 
        "18:47", "18:52", "19:02", "19:07", "19:17", "19:22", "19:32", "19:37", 
        "19:47", "19:52", "20:07", "20:22", "20:37", "20:52", "21:07", "21:22", 
        "21:37", "21:52", "22:07", "22:22", "22:37", "22:52", "23:07", "23:22", 
        "23:37", "23:52", "00:07", "00:37", "01:07", "01:37"
];

const bus =[
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "09:00" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "09:10" },
        { "nbr": 3527, "destination": "Paio Pires (Centro)", "time": "09:25" },
        { "nbr": 3030, "destination": "Fonte da Telha", "time": "09:40" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "09:55" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "10:05" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "10:15" },
        { "nbr": 3711, "destination": "Barreiro (Forum)", "time": "10:30" },
        { "nbr": 3038, "destination": "Banática", "time": "10:45" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "11:00" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "11:15" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "11:30" },
        { "nbr": 3528, "destination": "Paio Pires (Centro)", "time": "11:40" },
        { "nbr": 3030, "destination": "Monte da Caparica (FCT)", "time": "11:50" },
        { "nbr": 3711, "destination": "Monte da Caparica (FCT)", "time": "12:05" },
        { "nbr": 3021, "destination": "Costa da Caparica (Terminal)", "time": "12:15" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "12:25" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "12:40" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "12:50" },
        { "nbr": 3030, "destination": "Fonte da Telha", "time": "13:00" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "13:15" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "13:30" },
        { "nbr": 3711, "destination": "Monte da Caparica (FCT)", "time": "13:40" },
        { "nbr": 3527, "destination": "Paio Pires (Centro)", "time": "13:50" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "14:00" },
        { "nbr": 3038, "destination": "Banática", "time": "14:10" },
        { "nbr": 3012, "destination": "Fonte da Telha", "time": "14:20" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "14:30" },
        { "nbr": 3030, "destination": "Fonte da Telha", "time": "14:40" },
        { "nbr": 3528, "destination": "Paio Pires (Centro)", "time": "14:50" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "15:00" },
        { "nbr": 3021, "destination": "Costa da Caparica (Terminal)", "time": "15:10" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "15:20" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "15:30" },
        { "nbr": 3711, "destination": "Monte da Caparica (FCT)", "time": "15:40" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "15:50" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "16:00" },
        { "nbr": 3030, "destination": "Fonte da Telha", "time": "16:15" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "16:30" },
        { "nbr": 3038, "destination": "Banática", "time": "16:40" },
        { "nbr": 3527, "destination": "Paio Pires (Centro)", "time": "16:50" },
        { "nbr": 3030, "destination": "Monte da Caparica (FCT)", "time": "17:00" },
        { "nbr": 3711, "destination": "Barreiro (Forum)", "time": "17:10" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "17:20" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "17:30" },
        { "nbr": 3021, "destination": "Monte da Caparica (FCT)", "time": "17:40" },
        { "nbr": 3038, "destination": "Banática", "time": "17:44" },
        { "nbr": 3527, "destination": "Paio Pires (Centro)", "time": "17:50" },
        { "nbr": 3030, "destination": "Monte da Caparica (FCT)", "time": "18:10" },
        { "nbr": 3711, "destination": "Barreiro (Forum)", "time": "18:20" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "19:00" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "20:00" },
        { "nbr": 3528, "destination": "Paio Pires (Centro)", "time": "21:00" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "22:00" },
        { "nbr": 3021, "destination": "Costa da Caparica (Terminal)", "time": "23:00" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "00:00" },
        { "nbr": 3022, "destination": "Costa da Caparica (Terminal)", "time": "01:00" },
        { "nbr": 3033, "destination": "Monte da Caparica", "time": "02:00" },
        { "nbr": 3528, "destination": "Paio Pires (Centro)", "time": "03:00" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "04:00" },
        { "nbr": 3021, "destination": "Costa da Caparica (Terminal)", "time": "05:00" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "06:00" },
        { "nbr": 3034, "destination": "Quinta do Texugo", "time": "07:00" },
        { "nbr": 3021, "destination": "Costa da Caparica (Terminal)", "time": "08:00" },
        { "nbr": 3009, "destination": "Cacilhas (Terminal)", "time": "08:30" },
];

export function getNext3Tram() {
    const now = new Date();
    const nowTime = now.getHours()*60 + now.getMinutes();
    const futureTimes = tram.filter(time => {
        const [hours, minutes] = time.split(':').map(Number);
        const timeInMinutes = hours * 60 + minutes;
        return timeInMinutes > nowTime;
    });
    return futureTimes.slice(0, 3);
}

export function getNext3Bus() {
    const now = new Date();
    const nowTime = now.getHours()*60 + now.getMinutes();
    const futureTimes = bus.filter((b) => {
        const [hours, minutes] = b.time.split(':').map(Number);
        const timeInMinutes = hours * 60 + minutes;
        return timeInMinutes > nowTime;
    });
    return futureTimes.slice(0, 3);
}



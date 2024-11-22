var allUsers = 
[
    { name: "Alice Brown", clipId: "a.brown", location: "Ed7/1A", campus_x: 640, campus_y: 870, building_x: 875, building_y: 510 },
    { name: "Amanda Blue", clipId: "a.blue" },
    { name: "Bob White", clipId: "b.white" },
    { name: "Bill Black", clipId: "b.black" },
    { name: "Charlie Black", clipId: "c.black" },
    { name: "Catherine Green", clipId: "c.green" },
    { name: "David Green", clipId: "d.green"},
    { name: "Diana Red", clipId: "d.red" },
    { name: "Eve Blue", clipId: "e.blue" },
    { name: "Edward Yellow", clipId: "e.yellow" },
    { name: "Frank Red", clipId: "f.red" },
    { name: "Fiona White", clipId: "f.white" },
    { name: "Grace Yellow", clipId: "g.yellow" },
    { name: "George Black", clipId: "g.black" },
    { name: "Hank Purple", clipId: "h.purple" },
    { name: "Helen Blue", clipId: "h.blue" },
    { name: "Ivy Orange", clipId: "i.orange" },
    { name: "Ian Green", clipId: "i.green" },
    { name: "Jane Doe", clipId: "j.doe", location: "Library", campus_x: 1340, campus_y: 830, building_x: 0, building_y: 0 }, // coordenadas de building para user fora do 7 ?
    { name: "Jack Pink", clipId: "j.pink" },
    { name: "Jill White", clipId: "j.white" },
    { name: "John Smith", clipId: "j.smith", location: "Ed7/1.01", campus_x: 750, campus_y: 870, building_x: 1420, building_y: 645 },
    { name: "Mary Johnson", clipId: "m.johnson", location: "Ed1/1.02", campus_x: 930, campus_y: 830, building_x: 0, building_y: 0  } , // coordenadas de building para user fora do 7 ? estao no canto inferior esquerdo atualmente
]

var friends = [
    { name: "Jane Doe", clipId: "j.doe" },
    { name: "John Smith", clipId: "j.smith" },
    { name: "Mary Johnson", clipId: "m.johnson" }
]

export function getFriendsWithLocation() {
    return allUsers.filter(user => 
        friends.some(friend => friend.clipId === user.clipId)
    );    
}

export function getFriends() {
    return friends;
}

export function getFriendByName(name) {
    return allUsers.find(user => user.name === name);
}

export function addFriend(friendClipId) {
    const user = allUsers.find(user => user.clipId === friendClipId);
    if (user) {
        friends.push({ name: user.name, clipId: user.clipId });
    }
}

export function getAllUsers() {
    return allUsers;
}






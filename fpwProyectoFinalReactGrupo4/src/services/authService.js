const authService = (() => {
    let idCount = 1;

    const login = async (playerName) => {
        if (!playerName || playerName.trim() === "") {
            return null;
        }
        
        const user = { 
            id: idCount, 
            name: playerName.trim() 
        };      

        idCount++;
        return user;
    };

    return ({ 
        login 
    });
})();

export default authService;
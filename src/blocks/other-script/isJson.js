function isJsonCatForm(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
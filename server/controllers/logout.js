export const logoutUser = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json("User logged out");
}
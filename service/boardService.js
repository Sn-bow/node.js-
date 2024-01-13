const boardDao = require('../dao/boardDao')

const getBoardList = async () => {
    const getBoardList = await boardDao.getBoardList();
    return getBoardList;
};

const setBoard = async (title, content) => {
    const setBoard = await boardDao.setBoard(title, content)
    return setBoard
}

const getBoard = async (id) => {
    const getBoard = await boardDao.getBoard(id)
    return getBoard
}

const updateBoard = async (title, content, id) => {
    const state = await boardDao.updateBoard(title, content, id)
    return state
}

const deleteBoard = async (id) => {
    const state = await boardDao.deleteBoard(id)
    return state
}

module.exports = { getBoardList, setBoard, getBoard, updateBoard, deleteBoard };
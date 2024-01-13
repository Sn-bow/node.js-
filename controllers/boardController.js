const boardService = require('../service/boardService')

const getBoardList = async (req, res) => {
    const data = await boardService.getBoardList();
    res.status(200).json({ data });
}

const setBoard = async (req, res) => {
    const { title, content } = req.body
    const data = await boardService.setBoard(title, content);
    res.status(201).json(data)
}

const getBoard = async (req, res) => {
    const id = req.query.id
    const data = await boardService.getBoard(id)
    res.status(200).json(data)
}

const updateBoard = async (req, res) => {
    const { title, content, id } = req.body
    const state = await boardService.updateBoard(title, content, id)
    res.status(201).json(state)
}

const deleteBoard = async (req, res) => {
    const id = req.query.id
    const state = await boardService.deleteBoard(id)
    res.status(201).json({ message: 'complete delete board' })
}

module.exports = { getBoardList, setBoard, getBoard, updateBoard, deleteBoard };
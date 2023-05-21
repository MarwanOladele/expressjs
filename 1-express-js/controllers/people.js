const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: "imput a value" });
  }
  res.status(201).json({ sucess: true, person: [...people, { id: 7, name }] });
};

const putPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({
    success: true,
    data: newPeople,
  });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({
    success: true,
    data: [...newPeople],
  });
};

module.exports = {
  getPeople,
  postPerson,
  putPerson,
  deletePerson,
};

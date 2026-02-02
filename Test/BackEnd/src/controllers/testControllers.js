import data from '../models/data.js';

export async function getAllData(req, res) {
  try {
    const datas = await data.find().sort({ createdAt: -1 });
    res.status(200).json(datas);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export async function getDataById(req, res){
  try {
    const data = await data.findById(req.params.id);
    if(!data) return res.status(404).json({message: "Data not found"});
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function createData(req, res) {
  try {
    const {title,body} = req.body;
    const newData = new data({title,body});
    const savedata = await newData.save();
    res.status(201).json(savedata);
  } catch (error) {
    console.error("Error create data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export async function updateData(req, res) {
  try {
    const {title,content} = req.body;
    const updatedData = await data.findByIdAndUpdate(req.params.id, {title,content}, {new:true});

    if (!updatedData) return res.status(404).json({ message: "Data not found" });

    res.status(200).json(updateData);

  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export async function deleteData(req, res) {
  try {
    const deletedData = await data.findByIdAndDelete(req.params.id);

    if (!deletedData) return res.status(404).json({ message: "Data not found" });

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
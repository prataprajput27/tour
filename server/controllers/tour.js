import TourModal from "../models/tour.js";

export const createTour = async (req, res) => {
  const tour = req.body;
  const newTour = new TourModal({
    ...tour,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    // await TourModal.create({
    //   title: newTour.title,
    //   description: newTour.description,
    //   name: newTour.name,
    //   creator: newTour.creator,
    //   // tags: newTour.tags,
    //   imageFile: newTour.imageFile,
    // });
    res.status(201).json(newTour);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModal.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

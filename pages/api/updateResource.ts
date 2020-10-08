import { table, minifyRecords, getMinifiedRecord } from "./utils/Airtable";

const updateResource = async (req, res) => {
  const { id, rating } = req.body;
  const initialRating = 5;
  const newRating = initialRating + 1;
  try {
    const updatedRecord = await table.update([
      { id: "recPLpOHBQzZZQ4EE", fields: { rating: newRating } },
    ]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecord));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong with the update." });
  }
};
export default updateResource;

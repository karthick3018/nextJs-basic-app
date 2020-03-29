import personalDetails from '../../components/personalDetails.json';

export default (req, res) => {
  res.status(200).json(personalDetails)
}
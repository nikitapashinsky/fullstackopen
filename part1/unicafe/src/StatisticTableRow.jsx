const StatisticTableRow = ({ text, value }) => {
  return (
    <tr>
      <td className="py-0.5">{text}</td>
      <td width={100} className="py-0.5 font-mono text-right">
        {value}
      </td>
    </tr>
  );
};

export default StatisticTableRow;

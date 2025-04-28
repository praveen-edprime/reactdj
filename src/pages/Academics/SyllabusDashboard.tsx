import SubjectCard from "../../components/academics/SubjectCard";

const SyllabusDashboard = () => {
  const data = [
    {
      subject: "English",
      color: "bg-red-500",
      items: [
        "Periodic Test I",
        "First day at School (1 Topics)",
        "- First day at School",
        "Action Song (1 Topics)",
        "Haldi’s New Adventure (1 Topics)",
      ],
    },
    {
      subject: "Hindi",
      color: "bg-yellow-400",
      items: ["Periodic Test I", "Quarter", "NCERT HINDI SYLLABUS"],
    },
  ];

  return (
    <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Your Syllabus</h2>
        </div>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((section) => (
          <SubjectCard
            key={section.subject}
            subject={section.subject}
            color={section.color}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default SyllabusDashboard;

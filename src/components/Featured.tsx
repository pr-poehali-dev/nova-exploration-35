const types = [
  {
    title: "Приказ",
    description:
      "Правовой акт руководителя организации. Содержит обязательные для исполнения распоряжения. Оформляется на фирменном бланке с подписью и датой.",
  },
  {
    title: "Распоряжение",
    description:
      "Акт управления оперативного характера. Издаётся для решения текущих вопросов. Имеет ограниченный срок действия и конкретного исполнителя.",
  },
  {
    title: "Протокол",
    description:
      "Документ, фиксирующий ход обсуждения вопросов и принятые решения на заседаниях, совещаниях и собраниях. Содержит повестку дня и резолюции.",
  },
  {
    title: "Докладная записка",
    description:
      "Информационный документ, адресованный вышестоящему руководителю. Содержит изложение факта, ситуации и выводы или предложения составителя.",
  },
  {
    title: "Служебная записка",
    description:
      "Документ внутренней переписки между подразделениями одного уровня. Используется для координации действий и обмена информацией.",
  },
  {
    title: "Отчёт",
    description:
      "Документ с изложением сведений о выполнении задания, работы или плана. Бывает периодическим и разовым. Содержит анализ и выводы.",
  },
];

export default function Featured() {
  return (
    <div id="types" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">
            Классификация документов
          </h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight font-light max-w-3xl">
            Основные виды письменной информации в системе управления
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {types.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 flex flex-col gap-4 hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="w-8 h-px bg-black" />
              <h4 className="text-xl font-bold text-neutral-900 uppercase tracking-wide">
                {item.title}
              </h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

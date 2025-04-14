// components/Characters.tsx
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { charactersByPeriod } from '../data/characters';

export function Characters() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
  const [showStory, setShowStory] = useState(false);
  const periods = Object.keys(charactersByPeriod);

  const handleBack = () => {
    if (showStory) {
      setShowStory(false);
    } else {
      setSelectedCharacterId(null);
    }
  };

  const selectedCharacter =
    selectedPeriod && selectedCharacterId
      ? charactersByPeriod[selectedPeriod].find((char) => char.id === selectedCharacterId)
      : null;

  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          شخصيات الفتح الأندلسي
        </h1>

        {/* Period Buttons */}
        {!selectedCharacter && (
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-2 rounded-full font-arabic transition-colors ${
                  selectedPeriod === period
                    ? 'bg-[#2c1810] text-white'
                    : 'bg-white text-[#2c1810] hover:bg-[#c4a484] hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        )}

        {/* Detailed Card View */}
        {selectedCharacter && selectedCharacter.name === 'موسى بن نصير' && !showStory ? (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 font-arabic">
            <button
              onClick={handleBack}
              className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
            >
              <ArrowLeft className="inline-block ml-2" />
              العودة
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Musa_bin_Nusayr_-_%D9%85%D9%88%D8%B3%D9%89_%D8%A8%D9%86_%D9%86%D8%B5%D9%8A%D8%B1.png/330px-Musa_bin_Nusayr_-_%D9%85%D9%88%D8%B3%D9%89_%D8%A8%D9%86_%D9%86%D8%B5%D9%8A%D8%B1.png"
                alt={selectedCharacter.name}
                className="w-full md:w-1/3 h-auto rounded-xl object-cover"
              />
              <div className="flex-1 space-y-2 text-right">
                <h2 className="text-3xl font-bold text-[#2c1810]">{selectedCharacter.name}</h2>
                <p><strong>الاسم الكامل:</strong> موسى بن نصير اللخمي</p>
                <p><strong>الميلاد:</strong> 640م</p>
                <p><strong>الوفاة:</strong> 716م</p>
                <p><strong>المواطنة:</strong> الدولة الأموية</p>
                <p><strong>الدور:</strong> {selectedCharacter.role}</p>
                <p><strong>الفترة:</strong> {selectedCharacter.period}</p>
                {selectedCharacter.date && <p><strong>التاريخ:</strong> {selectedCharacter.date}</p>}
                <p className="pt-4">{selectedCharacter.description}</p>

                <button
                  onClick={() => setShowStory(true)}
                  className="mt-4 text-white bg-[#2c1810] hover:bg-[#3d2419] transition-colors py-2 px-4 rounded font-arabic"
                >
                  تريد معرفة المزيد؟
                </button>
              </div>
            </div>
          </div>
        ) : showStory ? (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 font-arabic text-right">
            <button
              onClick={() => setShowStory(false)}
              className="mb-4 text-[#2c1810] hover:text-[#c4a484] transition-colors"
            >
              <ArrowLeft className="inline-block ml-2" />
              العودة
            </button>
            <h2 className="text-3xl font-bold text-[#2c1810] mb-4">قصة موسى بن نصير</h2>
            <p className="leading-loose whitespace-pre-line">
              موسى بن نصير هو القائد البارع والتقي، كان موسى بن نصير قائدا فذا، تقيا ورعاء أرسى الله به دعائم الإسلام في هذه المنطقة الواسعة.
              وهو من التابعين، وروى عن بعض الصحابة، ومنهم تميم الداري. وصف موسى بن نصير بالحكمة والكرم والشجاعة والتقوى، ولم يهزم له جيش قط.
              أما والده، نصير بن عبد الرحمن بن يزيد، فقد كان شجاعًا، وشارك في معركة اليرموك الخالدة.
              كما حظى بمكانة رفيعة لدى معاوية بن أبي سفيان، حيث تولى منصب رئيس الشرطة في الشام أثناء ولايته في عهد الخليفة عمر بن الخطاب وعثمان بن عفان،
              وتذكر بعض الروايات أنه شغل أيضا منصب رئيس حرس معاوية نفسه.

              كان عن أسباب الردة وجد خطأين وقع فيهما من سبقوه، كما الهم الأول الموسى منذ أصبح واليا على المغرب هو تثبيت دعائم الإسلام في هذا الاقليم الذي ارتد أهله أكثر من مرة.
              وفي بحثه الخطأ الأول: هو أن عقبة بن نافع ومن معه كانوا يفتحون البلاد فتحا سريعا، ثم يتوعلون داخلها طمعا في فتح أماكن أخرى كثيرة دون أن يوفروا الحماية لظهورهم
              في هذه المناطق التي فتحوها؛ ومن ثم كانت النتيجة أن الأم الأمازيغ (البرير) انتبهوا لهذا الأمر واستغلوه جيدا، فانقلبوا على عقبة وأحاطوا به وقتلوه،
              وحتى يتغلب على هذا الأمر بدأ موسى بن نصير يفتح البلاد في أناة شديدة، وفي هدوء وحذر كحذر خالد بن الوليد الله، فبدأ يتقدم خطوة ثم يؤمن ظهره، ثم خطوة أخرى ويؤمن ظهره،
              حتى أتم الله عليه فتح هذا الإقليم مرة أخرى في سبع أو ست سنوات بينما استغرق عقبة شهور معدودات.

              أما الخطأ الثاني: وجد أن سكان هذا الاقليم لم يتعلموا الإسلام جيدا ولم يعرفوه حق المعرفة، فبدأ بتعليمهم الإسلام جيدا عن طريق علماء من الشام والحجاز حتى أصبحوا جند الإسلام وأهله.
              وهكذا عمل موسى بن نصير على تثبيت دعائم الإسلام وأتم الله عليه فتح الإقليم بكامله ماعدا مدينة واحدة وهي سبتة، فقد فتح ميناء طنجة ولم يفتح سبتة المماثل له في الأهمية.
              قام ببناء الموانئ التي تُشيّد فيها السفن وتعليم البربر الإسلام في مجالس خاصة بهم.
              أرسل طارق لفتح الأندلس وبعد نجاحه عبر بنفسه للأندلس لاستكمال الفتوحات، وحقق انتصارا بالغا في معركة وادى لكة ضد القوط.
              استدعاه الخليفة الوليد بن عبد الملك إلى دمشق لكنه واجه بعض المكائد السياسية التي حالت دون استكمال مسيرته، وتوفي عام (97 هـ / 719 م).
            </p>
          </div>
        ) : (
          // Character Cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(selectedPeriod ? charactersByPeriod[selectedPeriod] : []).map((character) => (
              <div key={character.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1 font-arabic">{character.name}</h3>
                  <p className="text-[#c4a484] mb-2 font-arabic">{character.role}</p>
                  {character.date && (
                    <p className="text-gray-500 text-sm mb-2 font-arabic">{character.date}</p>
                  )}
                  <p className="text-gray-600 mb-4 text-sm font-arabic">{character.description}</p>
                  <button
                    onClick={() => character.name === 'موسى بن نصير' && setSelectedCharacterId(character.id)}
                    className="flex items-center justify-center w-full bg-[#2c1810] text-white py-2 px-4 rounded hover:bg-[#3d2419] transition-colors font-arabic"
                  >
                    <span>اقرأ المزيد</span>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

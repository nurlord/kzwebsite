import Header from './components/ui/header';
import { WebsiteCard } from './components/ui/website-card';
import { websites } from './data/websites';

const App = () => {
  return (
    <div className='border-border border px-5 mx-auto max-w-[1500px]'>
      <Header />
      <div className='container flex flex-col items-start gap-3 py-8 md:py-12 lg:py-16'>
        <h1 className='text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
          Қазақ тілін үйренуге арналған ең тиімді платформа!
        </h1>
        <p className='max-w-2xl text-lg font-light text-foreground'>
          Soyle.kz, Tilqural, Bala.soyle.kz және Sozdik.kz платформаларын
          салыстырып, өзіңізге ең ыңғайлысын таңдаңыз. Біз сізге мазмұн,
          интерфейс және әдістемелік ерекшеліктер бойынша толық талдау ұсынамыз.
        </p>
        <div className='flex w-full items-center justify-start gap-2 pt-2'>
          {/* <a
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-me transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-6 text-xs'
              href='#'
            >
              Бастау
            </a> */}
        </div>
        <div className='flex gap-6 flex-wrap lg:flex-nowrap justify-center my-7'>
          {websites.map((card, index) => (
            <WebsiteCard
              key={index}
              title={card.title}
              undertitle={card.undertitle}
              content={card.content}
              link={card.link}
            />
          ))}
        </div>

        <hr className='w-full' />
        <div className='prose mx-auto p-6'>
          <h2 className='text-2xl font-bold mb-4'>1. Soyle.kz</h2>

          <h3 className='text-xl font-semibold mb-3'>Жалпы шолу:</h3>
          <p className='mb-4'>
            Soyle.kz — қазақ тілін үйренуге арналған алғашқы тегін онлайн курс.
            Бұл жоба Мемлекеттік тілді дамыту қорының бастамасымен, Нұрсұлтан
            Назарбаев қорының қолдауымен жүзеге асырылған. Платформа қазақ тілін
            үйренгісі келетін барлық адамдарға арналған және кез келген уақытта
            қолжетімді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Интерфейс:</h3>
          <p className='mb-4'>
            Платформаның интерфейсі қолданушыларға ыңғайлы және түсінікті етіп
            жасалған, бұл оқу процесін жеңілдетеді.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Басты бет:</strong> Пайдаланушыларды қазақ тілін үйренуге
              шақыратын негізгі ақпарат пен сілтемелерді қамтиды. Мұнда тіркелу,
              жүйеге кіру және әртүрлі бөлімдерге өту мүмкіндіктері бар.
            </li>
            <li>
              <strong>Сабақтар бөлімі:</strong> Сабақтар деңгейлер бойынша (A1 -
              C2) бөлінген. Әр деңгейде 10 сабақтан тұрады, ал әр сабақ лексика,
              грамматика, аудио, видео, оқу, жазу және тексеру жұмыстары сияқты
              бөлімдерден құралған.
            </li>
            <li>
              <strong>Қосымша ресурстар:</strong> "Говорим", "Читаем",
              "Слушаем", "Пишем", "Полезное" сияқты бөлімдерде қосымша
              материалдар мен жаттығулар ұсынылған.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>Мүмкіндіктері:</h3>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Интерактивті сабақтар:</strong> Әр сабақта жаңа сөздер,
              грамматикалық ережелер, аудио және видео материалдар, сондай-ақ
              интерактивті жаттығулар мен тесттер бар.
            </li>
            <li>
              <strong>Тақырыптық сөздік:</strong> Платформада тақырыптық сөздік
              бөлімі бар, онда әртүрлі тақырыптар бойынша сөздер мен олардың
              аудармалары ұсынылған.
            </li>
            <li>
              <strong>Аудио және видео материалдар:</strong> Тыңдау және көру
              арқылы тілді үйренуге арналған материалдар бар, бұл тыңдалым және
              айтылым дағдыларын дамытуға көмектеседі.
            </li>
            <li>
              <strong>Қосымша бөлімдер:</strong> "Говорим" бөлімінде күнделікті
              өмірде қолданылатын фразалар мен диалогтар, "Читаем" бөлімінде
              қазақ тіліндегі қысқа әңгімелер, "Слушаем" бөлімінде қазақ
              әндерінің мәтіндері, "Пишем" бөлімінде грамматикалық ережелер мен
              жаттығулар, ал "Полезное" бөлімінде қазақ мәдениеті мен дәстүрлері
              туралы ақпараттар бар.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>
            Пайдаланушы тәжірибесі:
          </h3>
          <p className='mb-4'>
            Soyle.kz платформасы қолданушыларға ыңғайлы және интуитивті тәжірибе
            ұсынады. Сабақтар құрылымы логикалық және түсінікті, бұл оқу
            процесін жеңілдетеді. Интерактивті элементтер мен мультимедиялық
            материалдардың үйлесімі оқуды қызықты әрі тиімді етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қолжетімділік:</h3>
          <p className='mb-4'>
            Платформа веб-шолғыштар арқылы қолжетімді және кез келген уақытта
            пайдалануға болады. Сонымен қатар, Soyle.kz мобильді қосымшасы да
            бар, бұл қолданушыларға тілді үйренуді ыңғайлы етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қорытынды:</h3>
          <p className='mb-4'>
            Soyle.kz — қазақ тілін үйренгісі келетіндер үшін құнды ресурс. Оның
            құрылымы, мазмұны және қосымша мүмкіндіктері қолданушыларға тілді
            тиімді және қызықты түрде меңгеруге көмектеседі.
          </p>
          <div>
            <p className='text-xl mb-1 font-bold'>Рейтинг:</p>
            <ul className='mb-4 text-2xl font-bold flex flex-col gap-2'>
              <li>📖 Грамматика: ★★★★☆ (4/5)</li>
              <li>🎧 Тыңдалым: ★★★★☆ (4/5)</li>
              <li>🗣 Сөйлеу: ★★★★☆ (4/5)</li>
              <li>📜 Сөздік қоры: ★★★☆☆ (3/5) </li>
              <li>🔥 Қолданудың ыңғайлылығы: ★★★★★ (5/5)</li>
            </ul>
          </div>
        </div>
        <hr className='w-full' />

        <div className='prose mx-auto p-6'>
          <h2 className='text-2xl font-bold mb-4'>2. Tilqural</h2>

          <h3 className='text-xl font-semibold mb-3'>Жалпы шолу:</h3>
          <p className='mb-4'>
            Tilqural — қазақ тілін өз бетінше үйренуге арналған интерактивті
            веб-платформа және мобильді қосымша. Ол тақырыптық сабақтарды ұсына
            отырып, қолданушылардың сөздік қорын кеңейтуге, оқу және айтылым
            дағдыларын жақсартуға, грамматикалық ережелерді түсінуге
            көмектеседі. Сонымен қатар, платформа қазақ тілінің латын әліпбиіне
            арналған курс қамтиды, бұл қолданушыларға жаңа әліпбиді үйренуге
            және оқу-жазу дағдыларын дамытуға мүмкіндік береді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Интерфейс:</h3>
          <p className='mb-4'>
            Платформа қолданушыларға ыңғайлы және түсінікті интерфейсті ұсынады,
            бұл оқу процесін жеңілдетеді.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Басты бет:</strong> Жоғарғы навигациялық панельде
              "Сабақтар", "Әліпби", "Ресурстар" және "Профиль" секілді
              бөлімдерге сілтемелер бар. Орталық бөлігінде ұсынылған сабақтар
              мен жаңартулар көрсетіледі, ал төменгі бөлігінде қосымша ресурстар
              мен байланыс ақпараты орналасқан.
            </li>
            <li>
              <strong>Сабақтар беті:</strong> Сабақтар тақырыптық түрде
              ұйымдастырылған және құрылымды түрде ұсынылған. Әр сабақта мәтін,
              суреттер және аудио материалдар біріктірілген. Интерактивті
              жаттығулар мен тесттер оқуды нығайтуға көмектеседі.
            </li>
            <li>
              <strong>Әліпби бөлімі:</strong> Бұл бөлім қазақ тілінің латын
              әліпбиін үйретуге арналған. Әр әріпке қатысты айтылу кеңестері мен
              жазу тәжірибесі бар егжей-тегжейлі нұсқаулықтар ұсынылады.
              Интерактивті жаттығулар қолданушыларға жаңа әліпбимен танысуға
              көмектеседі.
            </li>
            <li>
              <strong>Профиль беті:</strong> Қолданушылар өздерінің оқу
              прогресін бақылап, аяқталған сабақтарды көріп, жеке мақсаттар қоя
              алады. Жетістіктер мен белгілер мотивацияны арттыру үшін
              көрсетіледі.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>Мүмкіндіктері:</h3>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Тақырыптық сабақтар:</strong> Tilqural әртүрлі
              тақырыптарды қамтитын сабақтарды ұсынады, олар күнделікті өмірге,
              мәдениетке және басқа да салаларға қатысты. Әр сабақ алдыңғы
              білімге негізделіп, біртіндеп күрделенеді.
            </li>
            <li>
              <strong>Интерактивті жаттығулар:</strong> Платформа белсенді
              қатысуды талап ететін жаттығуларды қамтиды, мысалы, сөздерді
              суреттермен сәйкестендіру, бос орындарды толтыру және аудио
              жазбалар арқылы айтылымды тәжірибе жасау.
            </li>
            <li>
              <strong>Прогресті бақылау:</strong> Қолданушылар уақытын, әр
              сабаққа жұмсалған уақытты, тест нәтижелерін және жақсартуды қажет
              ететін салаларды қоса алғанда, егжей-тегжейлі аналитика арқылы өз
              прогресін бақылай алады.
            </li>
            <li>
              <strong>Ойын элементтері:</strong> Tilqural мотивацияны арттыру
              үшін ойын элементтерін енгізеді, мысалы, ұпайлар, белгілер және
              көшбасшылар тақтасы, бұл қолданушыларды тұрақты қатысуға және оқу
              мақсаттарына жетуге ынталандырады.
            </li>
            <li>
              <strong>Ресурстар кітапханасы:</strong> Қосымша материалдардың кең
              кітапханасы мақалалар, бейнелер және аудио жазбаларды қамтиды, бұл
              қазақ тілі мен мәдениетін тереңірек түсінуге көмектеседі.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>
            Пайдаланушы тәжірибесі:
          </h3>
          <p className='mb-4'>
            Tilqural қолданушыға ыңғайлы және интерактивті мазмұнға баса назар
            аудара отырып жасалған. Платформаның интуитивті орналасуы
            қолданушыларға сабақтар мен ресурстарды оңай шарлауға мүмкіндік
            береді. Мультимедиялық элементтердің интеграциясы әртүрлі оқу
            стильдеріне сәйкес келеді, бұл процесті әрі қызықты, әрі тиімді
            етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қолжетімділік:</h3>
          <p className='mb-4'>
            Платформа веб-шолғыштар арқылы қолжетімді және Android құрылғыларына
            арналған мобильді қосымша ретінде де қолжетімді. Бұл оқушыларға үйде
            немесе жолда болсын, өздеріне ыңғайлы уақытта оқуға мүмкіндік
            береді. Жауап беретін дизайн барлық мүмкіндіктердің әртүрлі
            құрылғыларда оңтайлы жұмыс істеуін қамтамасыз етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қорытынды:</h3>
          <p className='mb-4'>
            Tilqural қазақ тілін үйренуге арналған жан-жақты және интерактивті
            платформа ретінде ерекшеленеді. Оның құрылымдалған сабақтары,
            интерактивті жаттығулары және прогресті бақылау мүмкіндіктері
            өздігінен оқитын оқушылардың қажеттіліктерін қанағаттандыратын
            кешенді оқу тәжірибесін ұсынады.
          </p>
          <div>
            <p className='text-xl mb-1 font-bold'>Рейтинг:</p>
            <ul className='mb-4 text-2xl font-bold flex flex-col gap-2'>
              <li>📖 Грамматика: ★★★★☆ (4/5)</li>
              <li>🎧 Тыңдалым: ★★★☆☆ (3/5)</li>
              <li>🗣 Сөйлеу: ★★★☆☆ (3/5)</li>
              <li>📜 Сөздік қоры: ★★★★☆ (4/5)</li>
              <li>🔥 Қолданудың ыңғайлылығы: ★★★☆☆ (3/5)</li>
            </ul>
          </div>
        </div>
        <hr className='w-full' />
        <div className='prose mx-auto p-6'>
          <h2 className='text-2xl font-bold mb-4'>3. Bala.soyle.kz</h2>

          <h3 className='text-xl font-semibold mb-3'>Жалпы шолу:</h3>
          <p className='mb-4'>
            Bala.soyle.kz — мектепке дейінгі және бастауыш сынып оқушыларына
            арналған онлайн қашықтықтан оқыту қызметі. Балалардың ойын арқылы
            үйренуге деген сүйіспеншілігін ескере отырып, платформа білім беру
            мазмұнын қызықты ойындарға біріктіреді, бұл сөздік қорды байытуға
            және сөйлеу қабілеттерін дамытуға бағытталған.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Интерфейс:</h3>
          <p className='mb-4'>
            Платформа жарқын және интуитивті интерфейске ие, бұл жас оқушыларға
            оңай навигация жасауға мүмкіндік береді.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Басты бет:</strong> Түрлі-түсті визуалдармен және үлкен,
              басуға ыңғайлы иконкалармен безендірілген, әртүрлі оқу модульдерін
              көрсетеді, бұл балалар үшін тартымды және қолжетімді.
            </li>
            <li>
              <strong>Оқу модульдері:</strong> Әр модуль интерактивті ойын
              немесе әрекет ретінде жасалған, бұл сөздік қорды кеңейту, дұрыс
              айтылу және негізгі грамматиканы үйренуге бағытталған.
            </li>
            <li>
              <strong>Прогресті қадағалау:</strong> Жұлдыздар немесе белгілер
              сияқты қарапайым прогресс индикаторлары балаларды жетістіктерін
              атап өту арқылы ынталандырады.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>Мүмкіндіктері:</h3>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Интерактивті ойындар:</strong> Қазақ әліпбиін, сандарды
              және негізгі сөздік қорды үйрететін қызықты ойындар, бұл оқуды
              қызықты және тиімді етеді.
            </li>
            <li>
              <strong>Аудио-визуалды мазмұн:</strong> Әндер, мультфильмдер және
              аудио ертегілерді қамтиды, бұл тыңдау дағдыларын және дұрыс
              айтылуды жақсартады.
            </li>
            <li>
              <strong>Ата-аналарға арналған ресурстар:</strong> Баланың оқу
              процесін қолдау үшін ата-аналарға арналған нұсқаулықтар мен
              қосымша әрекеттерді ұсынады.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>
            Пайдаланушы тәжірибесі:
          </h3>
          <p className='mb-4'>
            Bala.soyle.kz балаларға арналған қызықты және қолайлы орта ұсынады.
            Платформаның жарқын түстерді, интерактивті элементтерді және таныс
            кейіпкерлерді қолдануы балалардың қызығушылығын сақтап, оларды
            ынталандырады. Әрекеттер қысқа және әртүрлі болып жасалған, бұл жас
            оқушылардың назарын аударуға бағытталған.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қолжетімділік:</h3>
          <p className='mb-4'>
            Платформа веб-шолғыштар арқылы жұмыс істейді және Android
            құрылғыларына арналған мобильді қосымшасы бар, бұл балаларға үйде
            немесе жолда оқуға мүмкіндік береді. Жауап беретін дизайн барлық
            мүмкіндіктердің әртүрлі құрылғыларда оңтайлы жұмыс істеуін
            қамтамасыз етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қорытынды:</h3>
          <p className='mb-4'>
            Bala.soyle.kz — қазақ тілін үйренуді бастаған жас балалар үшін құнды
            ресурс. Интерактивті ойындар, аудио-визуалды мазмұн және
            ата-аналарға арналған қолдау ресурстарын біріктіру арқылы ол
            мектепке дейінгі балалардың қажеттіліктеріне бейімделген толық және
            қызықты оқу тәжірибесін ұсынады.
          </p>
          <div>
            <p className='text-xl mb-1 font-bold'>Рейтинг:</p>
            <ul className='mb-4 text-2xl font-bold flex flex-col gap-2'>
              <li>📖 Грамматика: ★★☆☆☆ (2/5)</li>
              <li>🎧 Тыңдалым: ★★★★★ (5/5)</li>
              <li>🗣 Сөйлеу: ★★★★☆ (4/5)</li>
              <li>📜 Сөздік қоры: ★★★☆☆ (3/5)</li>
              <li>🔥 Қолданудың ыңғайлылығы: ★★★★★ (5/5)</li>
            </ul>
          </div>
        </div>
        <hr className='w-full' />
        <div className='prose mx-auto p-6'>
          <h2 className='text-2xl font-bold mb-4'>4. Sozdik.kz</h2>

          <h3 className='text-xl font-semibold mb-3'>Жалпы шолу:</h3>
          <p className='mb-4'>
            Sozdik.kz — қазақ-орыс және орыс-қазақ тілдері арасында аударма
            жасайтын онлайн сөздік қызметі. Әр аударма бағыты бойынша 60 000-нан
            астам сөздік мақалаларды қамтиды. Сонымен қатар, 16 000-нан астам
            қазақша сөздің айтылуын ұсынады.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Интерфейс:</h3>
          <p className='mb-4'>
            Платформа қолданушыларға ыңғайлы және түсінікті интерфейсті ұсынады,
            бұл жылдам және тиімді навигацияға мүмкіндік береді.
          </p>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Іздеу функциясы:</strong> Басты бетте орналасқан іздеу
              жолағы арқылы қолданушылар қазақ, орыс немесе ағылшын тілдерінде
              сөздер мен сөз тіркестерін енгізіп, лезде аудармалар мен
              анықтамаларды ала алады.
            </li>
            <li>
              <strong>Тіл таңдау:</strong> Тілдерді ауыстыруға арналған ашылмалы
              мәзір арқылы қолданушылар аударма бағытын оңай өзгерте алады.
            </li>
            <li>
              <strong>Қосымша ресурстар:</strong> Интерфейсте грамматика
              нұсқаулықтары, айтылу құралдары және қолдану мысалдары сияқты
              байланысты ресурстарға сілтемелер бар, бұл тіл үйренуді жақсартуға
              көмектеседі.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>Мүмкіндіктері:</h3>
          <ul className='list-disc list-inside mb-4'>
            <li>
              <strong>Кең көлемді сөздік қоры:</strong> Әр аударма бағыты
              бойынша 60 000-нан астам сөздік мақалаларды қамтиды, бұл
              қолданушыларға кең ауқымды лексикалық ақпарат алуға мүмкіндік
              береді.
            </li>
            <li>
              <strong>Айтылу мүмкіндігі:</strong> 16 000-нан астам қазақша
              сөздің айтылуын ұсынады, бұл дұрыс айтылуды үйренуге көмектеседі.
            </li>
            <li>
              <strong>Мәтіндік аударма:</strong> Қолданушыларға мәтіндерді бір
              тілден екінші тілге аударуға мүмкіндік береді, бұл толық сөйлемдер
              мен мәтіндерді түсінуді жеңілдетеді.
            </li>
            <li>
              <strong>Мобильді қосымша:</strong> Sozdik.kz жобасының бірыңғай
              сөздік базасын Android және iOS платформаларына арналған мобильді
              қосымшасы да пайдаланады, бұл қолданушыларға сөздікке кез келген
              жерде қол жеткізуге мүмкіндік береді.
            </li>
          </ul>

          <h3 className='text-xl font-semibold mb-3'>
            Пайдаланушы тәжірибесі:
          </h3>
          <p className='mb-4'>
            Sozdik.kz платформасы қолданушыларға ыңғайлы және интуитивті
            тәжірибе ұсынады. Жылдам іздеу мүмкіндігі, анық және түсінікті
            нәтижелер, сондай-ақ қосымша ресурстарға оңай қол жеткізу тіл
            үйренушілер мен аудармашылар үшін оны таптырмас құрал етеді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қолжетімділік:</h3>
          <p className='mb-4'>
            Платформа веб-шолғыштар арқылы қолжетімді және Android пен iOS
            құрылғыларына арналған мобильді қосымшалары бар, бұл қолданушыларға
            кез келген уақытта және кез келген жерде сөздікке қол жеткізуге
            мүмкіндік береді.
          </p>

          <h3 className='text-xl font-semibold mb-3'>Қорытынды:</h3>
          <p className='mb-4'>
            Sozdik.kz — қазақ және орыс тілдерін үйренушілер мен аудармашылар
            үшін таптырмас ресурс. Оның кең көлемді сөздік қоры, айтылу
            мүмкіндігі және қосымша ресурстары қолданушыларға тілдік дағдыларын
            жетілдіруге және аудармаларды дәл және тиімді орындауға көмектеседі.
          </p>
          <div>
            <p className='text-xl mb-1 font-bold'>Рейтинг:</p>
            <ul className='mb-4 text-2xl font-bold flex flex-col gap-2'>
              <li>📖 Грамматика: ★★★☆☆ (3/5)</li>
              <li>🎧 Тыңдалым: ★☆☆☆☆ (1/5)</li>
              <li>🗣 Сөйлеу: ★☆☆☆☆ (1/5)</li>
              <li>📜 Сөздік қоры: ★★★★★ (5/5)</li>
              <li>🔥 Қолданудың ыңғайлылығы: ★★★★☆ (4/5)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { Video, Users, MessageCircle, Star } from 'lucide-react';

function CoursesPage() {
  const courses = [
    {
      title: 'Private Course',
      description: 'Live online sessions with Mr. Mohamed Aliaa — personalized explanations, interactive problem-solving, and direct feedback designed for your progress.',
      details: 'One-on-one attention with customized lesson plans tailored to your learning pace. Get instant clarification on difficult concepts and receive strategies proven to boost your score.',
      price: '3499 EGP',
      icon: Users,
      buttonText: 'Contact to Enroll',
      buttonAction: () => window.location.href = '/contact',
      recommended: true
    },
    {
      title: 'Recorded Course',
      description: 'Pre-recorded video lessons covering every DSAT Math topic. Learn anytime, anywhere, at your own speed.',
      details: 'Learn all essential DSAT Math strategies with detailed examples and practice problems. Complete curriculum with step-by-step video explanations and downloadable resources.',
      price: '999 ~ 2999 EGP',
      icon: Video,
      buttonText: 'Start Learning',
      buttonAction: () => window.open('https://dsat-math.vercel.app/', '_blank'),
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Learning Style
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the format that best fits your schedule and learning preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 shadow-md hover:shadow-2xl transition-elegant hover:-translate-y-2 animate-fade-in-up group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                  borderColor: course.recommended ? 'rgb(59 130 246)' : 'rgb(229 231 235)'
                }}
              >
                {course.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-bl-xl flex items-center gap-1.5 shadow-md">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Recommended</span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 transition-elegant group-hover:from-blue-100 group-hover:to-blue-200 group-hover:scale-110 group-hover:rotate-3">
                    <course.icon className="w-8 h-8 text-blue-600 transition-elegant" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 transition-elegant group-hover:text-blue-600">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3 text-base">
                    {course.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {course.details}
                  </p>
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-2.5 rounded-lg border border-blue-200">
                    <p className="text-blue-700 font-bold text-lg">{course.price}</p>
                  </div>
                </div>

                <button
                  onClick={course.buttonAction}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-elegant shadow-md hover:shadow-xl hover:scale-[1.02] transform active:scale-[0.98]"
                >
                  {course.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="inline-block bg-white rounded-xl px-8 py-6 border border-gray-200 shadow-sm max-w-2xl transition-elegant hover:shadow-md">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <p className="text-gray-900 font-semibold">All courses are fully online</p>
              </div>
              <p className="text-gray-600">
                Learn from anywhere with an internet connection. No physical location required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;

"use client";
import { useState } from "react";

export default function ResumeAISummarizer() {
  const [resumeText, setResumeText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tokensUsed, setTokensUsed] = useState(null);

  const handleSummarize = async () => {
    // Validate input
    if (!resumeText.trim()) {
      setError("Please enter some resume text");
      return;
    }

    if (resumeText.length > 5000) {
      setError("Resume text is too long. Maximum 5000 characters.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");
    setTokensUsed(null);

    try {
      // TODO: Replace with your actual API Gateway URL after deployment
      const apiUrl = process.env.NEXT_PUBLIC_RESUME_AI_API_URL || "YOUR_API_GATEWAY_URL_HERE";
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resumeText: resumeText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate summary");
      }

      setSummary(data.summary);
      setTokensUsed(data.tokensUsed);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setResumeText("");
    setSummary("");
    setError("");
    setTokensUsed(null);
  };

  const exampleResume = `DevOps Engineer with 5 years of experience in AWS cloud infrastructure. Proficient in Terraform, Docker, Kubernetes, and CI/CD pipelines using GitHub Actions and Jenkins. Built automated deployment systems reducing deployment time by 60%. Strong background in Python scripting and infrastructure automation. Led migration of legacy applications to microservices architecture on AWS ECS. Experience with monitoring tools like Prometheus, Grafana, and CloudWatch.`;

  const loadExample = () => {
    setResumeText(exampleResume);
    setSummary("");
    setError("");
  };

  return (
    <div className="bg-[#252A34]/60 backdrop-blur-sm rounded-xl border border-[#08D9D6]/20 p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-[#08D9D6] flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Try it Live: AI Resume Summarizer
          </h3>
          <button
            onClick={loadExample}
            className="text-sm text-[#08D9D6] hover:text-[#08D9D6]/80 transition-colors"
          >
            Load Example
          </button>
        </div>
        <p className="text-[#EAEAEA]/80 text-sm">
          Paste a resume snippet below and get an AI-powered 3-bullet summary perfect for tech recruiters.
        </p>
      </div>

      {/* Input Section */}
      <div className="mb-4">
        <label className="block text-[#EAEAEA] font-medium mb-2">
          Resume Text
          <span className="text-[#EAEAEA]/60 font-normal ml-2">
            ({resumeText.length}/5000 characters)
          </span>
        </label>
        <textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste resume text here... (e.g., work experience, skills, achievements)"
          className="w-full h-40 px-4 py-3 bg-[#1a1d26] text-[#EAEAEA] border border-[#08D9D6]/30 rounded-lg focus:outline-none focus:border-[#08D9D6] transition-colors resize-none"
          disabled={loading}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleSummarize}
          disabled={loading || !resumeText.trim()}
          className="flex-1 px-6 py-3 bg-[#08D9D6] text-[#252A34] rounded-lg font-medium hover:shadow-lg hover:shadow-[#08D9D6]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Analyzing...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Summarize
            </>
          )}
        </button>
        <button
          onClick={handleClear}
          disabled={loading}
          className="px-6 py-3 border-2 border-[#08D9D6]/30 text-[#EAEAEA] rounded-lg hover:border-[#08D9D6]/50 hover:bg-[#08D9D6]/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-4 bg-[#FF2E63]/10 border border-[#FF2E63]/30 rounded-lg">
          <p className="text-[#FF2E63] text-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        </div>
      )}

      {/* Summary Display */}
      {summary && (
        <div className="p-6 bg-[#1a1d26] border border-[#08D9D6]/30 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold text-[#08D9D6] flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              AI-Generated Summary
            </h4>
          </div>
          <div className="text-[#EAEAEA] whitespace-pre-line leading-relaxed">
            {summary}
          </div>
          <div className="mt-4 pt-4 border-t border-[#08D9D6]/10">
            <p className="text-xs text-[#EAEAEA]/60 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Powered by Amazon Bedrock
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

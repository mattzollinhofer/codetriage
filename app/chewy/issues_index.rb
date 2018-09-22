class IssuesIndex < Chewy::Index
  define_type Issue.open.includes(:repo) do |index|
    field :title, type: 'text'
    field :repo_name
    field :comment_count, type: 'integer'
  end
end

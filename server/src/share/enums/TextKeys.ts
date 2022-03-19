enum TextKeys {
	NotRetrievedJobs = 'Could not retrieve all jobs!',
	NotRetrievedSettings = 'Could not retrieve all settings!',
	JobIsNotFound = 'Job is not found!',
	BuildCommandIsRequired = 'buildCommand is required and must be non blank',
	SomethingWentWrong = 'Something went wrong!',
	SettingsDeletedSuccess = 'Settings deleted successfully',
	FailedToAddJobToQueque = 'Failed to add job to the queque!',
	FailedToRetrieveJobLogs = 'Failed to retrieve the job logs',
	FailedSaveSettings = 'Failed to save settings!',
	FailedToCheckout = 'Failed to check out to',
	FailedToCloneRepository = 'Failed to clone repository',
	FailedToInstallDependencies = 'Failed to install dependencies',
	FailedToRunCheckCommands = 'Failed to run check commands',
	RepoNameIsRequired = 'repoName is required and must be non blank',
	MainBranchIsRequired = 'mainBranch is required and must be non blank',
	PeriodIsRequired = 'period is required and must be non blank',
	JobRunning = 'Job running failed',
}

export default TextKeys;

const accounts = require('../data/accounts');
let targetCompanies = new Set(); 
exports.login = (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'user' && password === 'password') {
        return res.status(200).json({ message: 'Login successful' });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
};

exports.getCompanies = (req, res) => {
    const companies = [
        { name: 'Company A', matchScore: 85 },
        { name: 'Company B', matchScore: 70 },
        { name: 'Company C', matchScore: 90 },
    ];

    const companiesWithTargetFlag = companies.map(c => ({
        ...c,
        target: targetCompanies.has(c.name)
    }));

    return res.status(200).json(companiesWithTargetFlag);
};
exports.toggleTarget = (req, res) => {
    const { companyName } = req.body;

    if (targetCompanies.has(companyName)) {
        targetCompanies.delete(companyName);
        return res.status(200).json({ message: `${companyName} unmarked as Target` });
    } else {
        targetCompanies.add(companyName);
        return res.status(200).json({ message: `${companyName} marked as Target` });
    }
};

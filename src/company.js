const Company = ({ companydata }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        companydata.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Company;